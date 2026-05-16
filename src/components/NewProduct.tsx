import Data from "../data.json"

export default function NewProduct() {
  return (
    <div>
      <div className="left">
        <span>NEW PRODUCT</span>
        <h1>{Data[2].name}</h1>
        <p>{Data[2].description}</p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  )
}
