import { DocumentProcessor } from '../../Domain/DocumentProcessor'

export class InvoiceProcessor extends DocumentProcessor {
  export(): void {
    console.log('Exporting invoice')
  }

  protected validate(): void {
    console.log('Validating invoice')
  }
}
