import styled from "styled-components";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
CabinRow.propTypes = {
  cabin: PropTypes.object,
};

const SmallButton = styled.abbr`
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  border: none;
  font-size: 12px;
  font-weight: 600;
  padding: 3px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--color-brand-500);
    color: var(--color-grey-100);
  }
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.4rem;
`;
const TextCenter = styled.span`
  text-align: center;
`;
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }
  return (
    <>
      <Table.Row>
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div> Fits up tp {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <TextCenter>&mdash;</TextCenter>
        )}

        <div>
          <ButtonRow>
            <SmallButton
              title="copy"
              onClick={handleDuplicate}
              disabled={isCreating}
            >
              <HiSquare2Stack />
            </SmallButton>
            <Modal>
              <Modal.Open opens="cabin-edit">
                <SmallButton title="edit">
                  <HiPencil />
                </SmallButton>
              </Modal.Open>
              <Modal.Window name="cabin-edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Open opens="cabin-delete">
                <SmallButton title="delete">
                  <HiTrash />
                </SmallButton>
              </Modal.Open>
              <Modal.Window name="cabin-delete">
                <ConfirmDelete
                  onConfirm={() => deleteCabin(cabinId)}
                  resourceName="cabin"
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Modal>
          </ButtonRow>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
