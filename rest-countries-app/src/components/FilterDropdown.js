import Select from "react-select"

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#0f172a",
    borderColor: "#00ffff",
    color: "#fff",
    boxShadow: state.isFocused ? "0 0 10px #00ffffaa" : "none",
    "&:hover": {
      borderColor: "#00ffff",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#101a2c", // lighter than page background
    border: "1px solid #00ffff55",
    boxShadow: "0 0 12px rgba(0, 255, 255, 0.3)",
    zIndex: 9999,
  }),
  
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#112240" : "#0f172a",
    color: "#00ffff",
    "&:hover": {
      backgroundColor: "#112240",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#00ffff",
  }),
  input: (provided) => ({
    ...provided,
    color: "#00ffff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af",
  }),
}

const FilterDropdown = ({ options, value, onChange, label }) => {
  const formattedOptions = options.map((option) => ({
    label: option,
    value: option,
  }))

  return (
    <div className="mb-6 text-white">
      <label className="block text-sm mb-2">{label}</label>
      <Select
        value={formattedOptions.find((opt) => opt.value === value) || null}
        onChange={(selected) => onChange(selected?.value || "")}
        options={formattedOptions}
        isClearable
        styles={customStyles}
        placeholder={`Select ${label}`}
      />
    </div>
  )
}

export default FilterDropdown
