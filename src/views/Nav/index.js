import { useEffect, useState } from 'react'
import axios from 'axios';

function Nav() {
	var [ dizi, diziUpdate ] = useState([])
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then(function(res) {
			var data = res.data
			diziUpdate(data)
		})
	}, [])

	return (
		<div>
			<p id="veri">Veriler buraya gelecek.</p>
			<button id="myBtn" type="button" className="btn btn-primary">Veri Çek</button>
			<table>
				<tbody>
				{
					dizi.map( function(a, index) {
						return(
							<tr key={index} style={{marginBottom: '20px'}}>
								<td>Id : {a.id}</td>
								<td>Title : {a.title}</td>
								<td>{a.completed ? <button type="button" className="btn btn-success">YES</button> : <button type="button" className="btn btn-danger">NO</button>}</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>
		</div>
	)
}

export default Nav