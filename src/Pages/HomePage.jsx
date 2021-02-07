import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/HOME/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
HomePage.propTypes = {

};
const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();
    console.log(hobbyList);

    const handleAddHobbyClick = () => {

        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }
        console.log(newHobby);
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div className="home-page">
            <h1>REDUX HOOKS - Home Page</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            >

            </HobbyList>
        </div>
    );
}

export default HomePage;