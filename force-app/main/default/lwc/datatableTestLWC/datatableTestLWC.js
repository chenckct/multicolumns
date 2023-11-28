import { LightningElement, track } from 'lwc';

export default class DatatableTestLWC extends LightningElement {
    @track columns = [
        {
            label: 'Datetime Column',
            fieldName: 'datetimeColumn',
            type: 'datetime',
            editable: true
        },
        ...Array.from({ length: 25 }, (_, i) => ({
            label: `Col ${i + 1}`,
            fieldName: `field${i + 1}`,
            editable: true
        }))
    ];

    @track data = Array.from({ length: 10 }, (_, rowIndex) => ({
        datetimeColumn: new Date(Date.now() - Math.floor(Math.random() * 1e7)).toISOString(),
        ...Array.from({ length: 25 }, (_, columnIndex) => ({
            [`field${columnIndex + 1}`]: `Row ${rowIndex + 1} - Value ${columnIndex + 1}`
        })).reduce((acc, val) => Object.assign(acc, val), {})
    }));

    handleRowAction(event) {
        // handle row action here
    }
}