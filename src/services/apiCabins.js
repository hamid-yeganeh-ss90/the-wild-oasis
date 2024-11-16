import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("cabins could not be loaded!");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  //// 1- create/edit cabin
  let query = supabase.from("cabins");

  /// A) Create new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  /// B) Edit cabin
  if (id)
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("cabins could not be created!");
  }

  /// 2- upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);

  /// 3- delete all cabin if there was an error uploading file
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", newCabin.id);
    throw new Error(
      "cabin image could not be uploaded and the cabin was not created!"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("cabins could not be deleted!");
  }
  return data;
}
