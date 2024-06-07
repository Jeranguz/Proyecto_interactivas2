import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'body',
		selector: row => row.body,
		sortable: true,
	},
    {
		name: 'time',
		selector: row => row.time,
		sortable: true,
	},
];

export const data = [
  	{
		id: 1,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 5 minutos',
	},
	{
		id: 2,
		title:"Nuevo mensaje aaaaaaaaaaaaaaaaaaaaaaaaa",
        body:"¡Hola! ¿Cómo estás? aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        time:"Hace 6 minutos",
	},
    {
		id: 3,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 7 minutos',
	},
    {
		id: 4,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 8 minutos',
	},
    {
		id: 5,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 9 minutos',
	},
    {
		id: 6,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 10 minutos',
	},
    {
		id: 7,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 11 minutos',
	},
    {
		id: 8,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 15 minutos',
	},
    {
		id: 9,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 25 minutos',
	},
    {
		id: 10,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 45 minutos',
	},
    {
		id: 11,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},
	{
		id: 12,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},
	{
		id: 13,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},
	{
		id: 14,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},
	{
		id: 15,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},
	{
		id: 16,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},
	{
		id: 17,
		title: 'Nuevo mensaje',
		body: '¡Hola! ¿Cómo estás?',
        time: 'Hace 1h',
	},

    
]

const SelectedRows = (selectedRows) => {
    console.log(selectedRows.selectedRows);
}

const DefaultTable = () => {
    
    return (
        <DataTable
            title="Tabla" 
            columns={columns}
            data={data}
            pagination 
            selectableRows
            onSelectedRowsChange={SelectedRows}
        />
    );

}

export default DefaultTable

