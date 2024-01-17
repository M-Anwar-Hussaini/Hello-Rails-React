import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGreeting} from "../redux/greetings/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((store) => store.greetings.greeting)

  useEffect(() => {
    dispatch(getGreeting())
  }, [dispatch]);

  console.log(greeting)
  return <h1>{greeting}</h1>
}

export default Greeting;