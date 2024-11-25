import React from "react";
import './deck.css'

export function Deck() {
  return (
  <main className='container-fluid bg-secondary text-center'>
    <h3>Your Deck</h3>
    <table>
        <tr className="deck">
            <td>Card 1</td>
            <td>Card 2</td>
            <td>Card 3</td>
            <td>Card 4</td>
            <td>Card 5</td>
        </tr>
        <tr>
            <td>Card 6</td>
            <td>Card 7</td>
            <td>Card 8</td>
            <td>Card 9</td>
        </tr>
    </table>
    <p></p>
    <h3>Card Options</h3>
    <table>
        <tr>
            <button type="submit">Card 10</button>
            <button type="submit">Card 11</button>
            <button type="submit">Card 12</button>
            <button type="submit">Card 13</button>
            <button type="submit">Card 14</button>
        </tr>
        <tr>
            <button type="submit">Card 15</button>
            <button type="submit">Card 16</button>
            <button type="submit">Card 17</button>
            <button type="submit">Card 18</button>
            <button type="submit">Card 19</button>
        </tr>
        <tr>
            <button type="submit">Card 20</button>
            <button type="submit">Card 21</button>
            <button type="submit">Card 22</button>
            <button type="submit">Card 23</button>
            <button type="submit">Card 24</button>
        </tr>
    </table>
  </main>
);
}