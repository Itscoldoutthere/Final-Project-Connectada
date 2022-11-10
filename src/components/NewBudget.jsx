import {useState} from "react";
import Message from "./Message";

const NewBudget = ({budget, setBudget}) => {
    const [message, setMessage] = useState("");

    const handleBudget = (e) => {
        e.preventDefault();

        if (!budget || budget < 0) {
            setMessage("Invalid Budget");
            return;
        }

        setMessage("");
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handleBudget}
                className="formulario">
                <div className="campo">
                    <label>Define your budget.</label>

                    <input className="nuevo-presupuesto" type="text" placeholder="Type your budget here."
                        value={budget}
                        onChange={
                            (e) => setBudget(Number(e.target.value))
                        }/>
                </div>

                <input type="submit" value="add budget"/> {
                message && <Message tipo="error">
                    {message}</Message>
            } </form>
        </div>
    );
};

export default NewBudget;
