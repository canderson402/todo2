import React from 'react';
import {
  View,
  Pressable,
  Text
} from 'react-native';
import MainStyle from '../styles/main.js';
import { connect } from "react-redux"; 
import TaskForm from "./TaskForm.js";
import {toggleInput} from '../actions/task.js';

const TaskList = (props) => {
  const { showInput } = props;
    return (
      <View style={MainStyle.Container}>
      <View style={MainStyle.Test2}></View>
      {!showInput && 
        <View style={MainStyle.Test3}>
          <Pressable style={MainStyle.Button} onPress={() => props.dispatch(toggleInput(!showInput))}>
            <Text style={MainStyle.ButtonText}>+</Text>
          </Pressable>
        </View>
}
        {showInput && 
          <TaskForm />
        }
      </View>
    );
  };

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    showInput: state.showInput };
};

export default connect(mapStateToProps)(TaskList);