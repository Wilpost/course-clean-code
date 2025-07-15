export abstract class DocumentProcessor {
  process(data: any) {
    if (!this.validate(data)) {
      throw new Error('Document is not valid')
    }
    this.export(data)
    this.applySeal()
  }

  applySeal() {
    console.log('Applying seal to document')
  }

  protected abstract validate(data: any): boolean
  protected abstract export(document: any): void
}
