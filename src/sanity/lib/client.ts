import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: '1t887iwj',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:'skBaVZFWIgkCRIVRBj5FHi7qjNeTAVlV5GLOLPKJGabN7mEXyxdrcGCLvkiQHLYcMdB6kHKtK8N8rUsOY9ZClsxQ5vVpbfw6GeTat5xSbzqvMuEoVgg1Go37Cv9IMXzYBarGdscAoecFE5JkvYEUzy0fUDWk5i690fpaG59N2fqXbTpSHNfr'
})
