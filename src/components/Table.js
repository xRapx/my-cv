"use clie"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table"


export default function TableUi ({data}) {

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] text-4xl ">Features</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>			
					{data.map((item ,index) => {
						return <TableRow key={index}>
									<TableCell className="font-medium ">{item.name}</TableCell>
							</TableRow>
					})}		
			</TableBody>
		</Table>

	);
}