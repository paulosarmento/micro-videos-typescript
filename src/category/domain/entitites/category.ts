import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";
export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category {
  public readonly id: UniqueEntityId;

  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
    this.description = this.props.description;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }
  private set description(value: string) {
    this.props.description = value ?? null;
  }

  get is_active() {
    return this.props.is_active;
  }
  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }

  get created_at() {
    return this.props.created_at;
  }
}

// mede, qualifica ou descreve uma coisa no dominio
// pode ser mantido como individual
// ele modela um todo conceitual compondo atributos relacionados como uma inidade integral
// ele e completamente substituivel quando a medicao ou descricao muda
// ele pode ser comparado com outros usando a igualdade de valor
// ele fornece para comportamento livre de efeitos colaterais
