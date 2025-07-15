import { DocumentProcessor } from '../../Domain/DocumentProcessor'

export class ReceiptProcessor extends DocumentProcessor {
  export(): void {
    console.log('Exporting receipt')
  }

  protected validate(): void {
    console.log('Validating receipt')
  }
}
