import classes from './MealtemForm.module.css';
import Input from '../../UI/Input'
const MealItemForm=props=>{
    return(<form className={classes.form}>
        <Input label='Amount' 
        input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            defaultValue:'1'

        }}/>
        <button>+ ADD</button>
    </form>);
};
export default MealItemForm;