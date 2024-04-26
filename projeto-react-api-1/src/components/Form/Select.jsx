import React from 'react';
import styles from './Select.module.css';
function Select({ text, name, options, handlerOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handlerOnChange}>
                <option value="">selecione uma categoria</option>
                {options.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                        {opt.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
