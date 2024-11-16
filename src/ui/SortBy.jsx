import PropTypes from "prop-types";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

SortBy.propTypes = {
  options: PropTypes.array,
};

function SortBy({ options }) {
  const [searchParams, setsearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setsearchParams(searchParams);
  }
  return (
    <Select
      value={sortBy}
      onChange={handleChange}
      options={options}
      type="white"
    />
  );
}

export default SortBy;
