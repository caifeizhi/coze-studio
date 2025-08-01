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
 
export { redirect } from './location';
export { GlobalEventBus } from './event-bus';
export { globalVars } from './global-var';
export { COZE_TOKEN_INSUFFICIENT_ERROR_CODE } from './const/custom';
export { BaseEnum, SpaceAppEnum } from './const/app';

// community bot store detail业务场景专用key值
export {
  defaultConversationKey,
  defaultConversationUniqId,
} from './const/community';
