/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import { type IPlugin } from '@coze-arch/idl2ts-plugin';
import { type IParseResultItem } from '@coze-arch/idl2ts-helper';

export interface Options {
  entries: string[];
  idlRoot: string;
  parsedResult?: IParseResultItem[];
  plugins?: IPlugin[];
  allowNullForOptional?: boolean;
  mapEnumKeyAsNumber?: boolean;
  outputDir: string;
  genSchema: boolean;
  genMock: boolean;
  genClient: boolean;
  entryName?: string;
  // createAPI 所在文件路径
  commonCodePath?: string;
  // decode encode 会丢失类型，这里提供一种方式，业务手动补充上对应的类型
  patchTypesOutput?: string;
  // patchTypesOutput 的别名，patch type 需要使用额外的 pkg 组织时需要提供
  patchTypesAliasOutput?: string;
}

export interface IGenOptions extends Options {
  idlRoot: string;
  outputDir: string;
  formatter?: (file: string, code: string) => string;
}
