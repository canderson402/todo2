import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Keyboard } from 'react-native';
import { toggleInput } from '../actions/task.js';
import { connect } from "react-redux"; 
import MainStyle from '../styles/main.js';


const TaskForm = (props) => {
  const { showInput, dispatch } = props;
  const backAction = () => { dispatch(toggleInput(!showInput))}
  Keyboard.addListener("keyboardDidHide", backAction);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View>
        <TextInput
        autoFocus={true}
        placeholder="Add Task"
        style={MainStyle.FormInput}
        onSubmitEditing={() => backAction}/>
      </View>
    </KeyboardAvoidingView>
  );
};

const addTask = () => {
    this.props.dispatch(Actions.addTask({
      id: 1,
      title: "Buy Milk",
      completed: false
      }));
}

const removeTask = () => {
  this.props.dispatch(Actions.removeTask({
    id: 1
    }));
}

const mapStateToProps = (state) => {
    return {
      tasks: state.tasks,
      showInput: state.showInput};
  };
  
  export default connect(mapStateToProps)(TaskForm);