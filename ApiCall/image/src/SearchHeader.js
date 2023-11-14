import {useState} from "react";

function SearchHeader({search}) {
    const [valueInput, setvalue] = useState('')
    const handleFormSubmit = (event) => {
        //onsubmit sayfayı yeniliyor, yenilenmesini engellemek için handleFormSubmit içerisinde event kullanarak preventDefault metodunu çağırdık. preventDefault yenilenmeyi engeller.
        event.preventDefault();
        search(valueInput);
    }

    const handleChange = (event) => {
        setvalue(event.target.value);
    }

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label className="searchLabel" >Hangi Görseli Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchHeader;
