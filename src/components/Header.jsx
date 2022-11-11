import {useState} from "react";
import NewBudget from "./NewBudget";
import BudgetManager from "./BudgetManager";

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget}) => {
    return (


        <header>
            <h1>Budget Planner</h1>

            {isValidBudget ? (
                < BudgetManager 
                budget = {budget}
                />
            ) : (
                <NewBudget 
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}/>
            )
            
        } </header>
    );
};

export default Header;
