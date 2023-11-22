export const dummy: any = [
    {
        id: "unique id",
        name: 'Big Query Datasets',
        entities: [],
        relationships: [],
        dependsOn: [],
        executionHandler: dummyfunction,
        permissions: ['bigquery.datasets.get'],
        apis: ['bigquery.googleapis.com'],
      }
]

async function dummyfunction(params:any) {
    console.log('working man')
}