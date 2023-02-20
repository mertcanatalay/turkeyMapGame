
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import TurkeyMap from 'turkey-map-react';

export default function TurkeyMapGame() {

    const [city, setCity] = useState("");
    const [selectedCityData, setSelectedCityData] = useState([]);

    function Tr2En(text) {
        var Maps = {
            "İ": "I", "Ş": "S", "Ç": "C", "Ğ": "G", "Ü": "U", "Ö": "O",
            "ı": "i", "ş": "s", "ç": "c", "ğ": "g", "ü": "u", "ö": "o"
        };
        Object.keys(Maps).forEach(function (Old) {
            text = text.replace(Old, Maps[Old]);
        });
        return text;
    }
    const handleCity = (e) => {
        setCity(e.target.value);
        console.log(cityy, "yazılan");
    };

    const handleSelectedCity = (plateNumber, name) => {
        //console.log(plateNumber + " - " + name + " is just clicked!")
        const newCity = ""
        setSelectedCityData([...selectedCityData, name]);
        console.log(selectedCityy, "harita")
    };

    var cityy = Tr2En(city).toString().toUpperCase().replace("İ", "I").replace("Â", "A");
    var selectedCityy = selectedCityData //Tr2En(selectedCityData).toString().toUpperCase().replace("İ", "I").replace("Â", "A");

    const karsılastırma = () => {
        if (cityy == selectedCityy) {
            toast.success('Doğru')
        }
        else {
            toast.error('Yanlış')
        }
    }





    return (
        <div>


            <div className="input-group input-group-lg">
                <span className="input-group-text" id="inputGroup-sizing-lg">Şehir Tahmininiz</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={city} onChange={handleCity} />
                <button type="button" className="btn btn-primary" onClick={karsılastırma}>Onayla</button>
            </div>

            <div style={{marginTop:"15px"}} class="text-center">
                <div class="row">
                    <div class="col-8">
                        <TurkeyMap onClick={({ plateNumber, name }) => handleSelectedCity(plateNumber, name)} />
                    </div>
                    <div class="col-2">
                        <div className="card">
                            <div className="card-body">
                                seçilen-({selectedCityy.length})
                                <br/>
                                {selectedCityy}
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div className="card">
                            <div className="card-body">
                                Yazılan-({cityy.length})
                                <br/>
                                {cityy}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}