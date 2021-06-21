import React, { useState, useEffect, useContext } from "react";
import courses from "data/CoursesData";
import Course from "components/Course";
import UserContext from "userContext";
import { Table } from "react-bootstrap";

export default function Courses() {
  const { user } = useContext(UserContext);
  // console.log(user);

  // const [activeCourses, setIsActiveCourses] = useState([]);
  // const [allCourses, setAllCourses] = useState([]);
  const [activeComponents, setActiveComponents] = useState([]);
  const [allComponents, setAllComponents] = useState([]);

  // fetch("http://localhost:4000/api/courses/allCourses", {
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {});

  // console.log(allCourses);

  useEffect(() => {
    if (user.isAdmin) {
      fetch("http://localhost:4000/api/courses/allCourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAllComponents(
            data.map((course) => {
              return (
                <tr>
                  <td>{course._id}</td>
                  <td>{course.name}</td>
                  <td>{course.price}</td>
                  <td>{course.isActive}</td>
                </tr>
              );
            })
          );
        });
    } else {
      fetch("http://localhost:4000/api/courses/allActiveCourses")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // console.log(activeCourses);

          setActiveComponents(
            data.map((course) => {
              return <Course key={course._id} props={course} />;
            })
          );
        });
    }
  }, [user]);
  // console.log(activeComponents);
  console.log(allComponents);

  // let AllCourses = allCourses.map((course) => {
  //   return <Course key={course._id} props={course} />;
  // });
  return (
    <>
      {user.isAdmin ? (
        <>
          <h1 className="text-center mb-5">Course Dashboard</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            {allComponents}
            <tbody></tbody>
          </Table>
        </>
      ) : (
        <>
          <h1 className="mb-5 text-center">Courses</h1>
          {activeComponents}
        </>
      )}
    </>
  );
}
