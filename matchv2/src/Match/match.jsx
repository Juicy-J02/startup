import React from "react";
import './match.css'

export function Match() {
  return (
  <main className='container-fluid bg-secondary text-center'>
    <table className="Board">
      <tr>
        <td className="card"><button type="submit">Position 1</button></td>
        <td className="card"><button type="submit">Position 2</button></td>
        <td className="card"><button type="submit">Position 3</button></td>
        <td className="card"><button type="submit">Position 4</button></td>
        <td className="card"><button type="submit">Position 5</button></td>
        <td className="card"><button type="submit">Position 6</button></td>
      </tr>
      <tr>
        <td className="card"><button type="submit">Position 7</button></td>
        <td className="card"><button type="submit">Position 8</button></td>
        <td className="card"><button type="submit">Position 9</button></td>
        <td className="card"><button type="submit">Position 10</button></td>
        <td className="card"><button type="submit">Position 11</button></td>
        <td className="card"><button type="submit">Position 12</button></td>
      </tr>
      <tr>
        <td className="card"><button type="submit">Position 13</button></td>
        <td className="card"><button type="submit">Position 14</button></td>
        <td className="card"><button type="submit">Position 15</button></td>
        <td className="card"><button type="submit">Position 16</button></td>
        <td className="card"><button type="submit">Position 17</button></td>
        <td className="card"><button type="submit">Position 18</button></td>
      </tr>
    </table>
    
    <h3 className="score">Score: 0</h3>
    
    <form method="get" action="home.html">
      <button className="backbutton" type="submit">Back</button>
    </form>
  </main>
);
}
