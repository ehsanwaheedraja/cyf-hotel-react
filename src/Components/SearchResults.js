import React from "react";
// import FakeBookings from "../data/fakeBookings.json";
// const results = { FakeBookings };
// console.log(results.FakeBookings);

const SearchResults = props => {
  console.log(props.results);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(customer => {
          return (
            <tr>
              <th scope="row">{customer.id}</th>
              <td>{customer.title}</td>
              <td>{customer.firstName}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.roomId}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
