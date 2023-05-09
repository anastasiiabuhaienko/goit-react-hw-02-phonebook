

const Filter = ({ value, onChange }) => (

    <label>
        Find contacts by name or number
        <input
            type="text"
            value={value}
            onChange={onChange}
        >

        </input>
    </label>
);

export default Filter;
 
