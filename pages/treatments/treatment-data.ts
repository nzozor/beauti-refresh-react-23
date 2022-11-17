/* 
  So there are main section
  A section contain either items or Treatments
  Section and Treatment have layout
  A treatment can get items
*/
export const Layout = {
  fullWidth: '',
  halfColumn: ''
}

export const TREATMENT_SECTIONS = [
  {
    sectionName: 'Aesthetic Treatments',
    childrenSections: null,
    treatments: [{
      treatmentName: 'Anti-Wrinkle Injections',
      hasPage: false,
      layout: 'full-width',
      slug: '',
      prices: [
        [{ title: null, rows: ['One Area', 'Two Areas', 'Three Areas'] },
        { title: null, rows: ['£200', '£280', '£380'] }
        ]
      ]
    }]
  },
  {
    sectionName: 'Skin Treatments',
    childrenSections: [{
      sectionName: 'Advanced Skin Treatments',
      treatments: [{
        treatmentName: 'Skin Consultation',
        hasPage: false,
        slug: ''
      }]
    }, {
      sectionName: 'Classic Skin Treatments',
      treatments: [{
        treatmentName: 'Skin Consultation',
        hasPage: false,
        slug: ''
      }]
    }]
  },
  {
    sectionName: 'Waxing',
    childrenSections: null,
    treatments: null,
    layout: 'Half Column',
    prices: [
      [
        { title: 'Lower Body', rows: ['Full Legs', 'Lower Legs'] },
        { title: 'Single', rows: ['£45', '£23', '£25'] }
      ],
      [
        { title: 'Intimate Waxing for Women', rows: ['Bikini', 'Lower Legs'] },
        { title: 'Single', rows: ['£45', '£23', '£25'] }
      ],
    ]
  },
]