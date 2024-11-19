export interface AraDataType {
    id:             string;
    project_name:   string;
    output_name:    string;
    created:        string;
    modified:       string;
    last_run:       string;
    table_headers:  TableHeader[];
    table_data:     Array<string[]>;
    workflow_steps: WorkflowStep[];
    row_count:      string;
}

export interface TableHeader {
    name: string;
    type: string;
}

export enum Type {
    Float = "float",
    Int = "int",
    Object = "object",
    Serial = "serial",
}

export interface WorkflowStep {
    id:           string;
    name:         string;
    ord_exec:     number;
    params_extra: ParamsExtra;
    status:       string;
    name_title:   string;
    note:         null;
}

export interface ParamsExtra {
    id?:            string;
    name?:          string;
    note:           null;
    pipeline?:      number;
    expression?:    string;
    column_name?:   string;
    fork?:          boolean;
    agg_type?:      string[];
    dim_cols?:      string[];
    meas_col?:      Array<string[]>;
    fork_name?:     string;
    columns?:       string[];
    clean_type?:    string;
    type?:          string;
    extras?:        Extras;
    dataset2?:      string;
    left_columns?:  string[];
    right_columns?: string[];
    dataset2_name?: string;
}

export interface Extras {
    project:      string;
    internal:     boolean;
    dataset_name: string;
    project_name: string;
}