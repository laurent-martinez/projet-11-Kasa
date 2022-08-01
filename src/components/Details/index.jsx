import { useParams } from 'react-router-dom'

const Details = ({ data, title }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))

   return (
      <>
         <button className="details">
            {title}
            <svg
               width="28"
               height="17"
               viewBox="0 0 28 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
                  fill="white"
               />
            </svg>
         </button>
      </>
   )
}

export default Details
