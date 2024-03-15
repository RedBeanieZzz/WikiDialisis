import axios from "axios"
import { useEffect, useState } from "react"
import { DATA_SERV_ENDPOINT } from "../../config";
import "./styleServ.css"

export default function getServices() {
	const [service, setService] = useState([]); 

	useEffect(() => {
		axios.get(DATA_SERV_ENDPOINT)
			.then(response => {
				console.log(response.data)
				setService(response.data)
			})
			.catch((error) => {
				console.log(error.message)
			});
	}, [])

	//FILTRAR POR PAGINAS Y TIPOS

	return (
		
		<div className="container">
				<table className="info" >
					<thead>
						{service.map((serv, index) => {
							return <tr className="cont" key={index}>
								<th className="dt">{serv.id}</th>
								<th className="dt">{serv.nombre_prestador}</th>
							</tr>
						})}
					</thead>
				</table>
			</div>
	)
}

