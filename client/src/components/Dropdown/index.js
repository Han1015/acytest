import React, { useState, useEffect, useRef } from "react";
import { ArrowDown } from "../Arrow";
import "./style.scss";

/**
 * @param {string} value
 * @param {function} onChange
 * @param {array} lis
 */

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState();
  const dropDownRef = useRef();

  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => setSelection(item.id);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleClick = (e) => {
    if (!dropDownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="dd-wrapper" ref={dropDownRef}>
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={toggle}
        onClick={toggle}
      >
        <p className="dd-header__title">
          <span>{title}</span>
          <i className="fas fa-angle-down" style={{ marginLeft: 3 }}></i>
        </p>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
