import styled from "styled-components"; 
import Tracker from "./Expense Manager/Tracker"; 
import GlobalStyles from "./globalStyles"; 

const Main = styled.div` 
display: flex; 
justify-content: center; 
align-items: center;
`; 

const ExpenseManager = () => { 
return ( 
	<Main> 
	<GlobalStyles /> 
	<Tracker /> 
	</Main> 
) 
} 

export default ExpenseManager;
