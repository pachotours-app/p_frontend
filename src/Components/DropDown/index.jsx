import { useState } from "react";
import { Icon } from '@iconify-icon/react';
import styles from "./DropDown.module.css";

export const CustomDropdown = () => {
  const options = [
    { value: "Horse", label: "Horse Riding", icon: "mdi:horse-human" },
    { value: "Car", label: "Car", icon: "mdi:car" },
    { value: "Walking", label: "Walking", icon: "mdi:walk" }   ];

  // Initial state "Horse Riding" selected
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.button}>
        {selected.icon && (
          <Icon icon={selected.icon} width="30px" height="30px" />
        )}
        <span className={styles.selectedText}>{selected.label}</span>
        <Icon
          icon="mdi:chevron-down"
          width="30px"
          height="30px"
          className={styles.arrow}
        />
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={styles["menu-item"]}
            >
              <Icon icon={option.icon} width="30px" height="30px" />
              <span>{option.label}</span>
	    </li>
          ))}
        </ul>
      )}
    </div>
  );
};
