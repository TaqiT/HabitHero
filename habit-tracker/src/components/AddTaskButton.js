import { TouchableOpacity } from "react-native";
import addButton from  "../screens/TaskTab";

const addButtonButton = ({addButton}) => {
    return (
        <TouchableOpacity style = {styles.addButton}> 
		
            <Text> + style= {styles.addButtonText} </Text>
			
        </TouchableOpacity>
    ); 
}




const styles = StyleSheet.create({
	addButton: {
		padding: 10,
		elevation: 2,
		flexDirection: 'row',
		alignSelf: 'center',
		padding: 5,
		width: 50,
		height: 50,
		marginTop: 10,
		borderColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		borderRadius: 15,
		top: -20,
		right: 20,
		position: 'absolute',  
	  },
	  
	  /*
	  addButtonOpen: {
		backgroundColor: 'pink',
	  },
	*/

	  addButtonText: {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 20,
	  },
});

export default Points;
