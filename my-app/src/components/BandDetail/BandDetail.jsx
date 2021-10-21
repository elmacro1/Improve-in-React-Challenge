import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function BandDetail() {
  let { id } = useParams();
  let [band, setBand] = useState({});

  async function getBandDetail() {
    let band = await axios.get(
      `https://my-json-server.typicode.com/improvein/dev-challenge/bands?id=${id}`
    );
    console.log(band.data[0]);
    setBand(band.data[0]);
  }

  useEffect(() => {
    getBandDetail();
  }, []);

  return (
    <div>
      <h3>{band.name}</h3>
      <div>
        <h4>Year</h4>
        <p>{band.year}</p>
      </div>
      <div>
        <h4>Country</h4>
        <p>{band.country}</p>
      </div>
      <div>
        <h4>Members</h4>
        {band.members.map((member) => {
          return <p>{member.name}</p>;
        })}
      </div>
    </div>
  );
}
