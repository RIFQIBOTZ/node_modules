import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
import {
  CreateIdentityPoolCommandInput,
  CreateIdentityPoolCommandOutput,
} from "../commands/CreateIdentityPoolCommand";
import {
  DeleteIdentitiesCommandInput,
  DeleteIdentitiesCommandOutput,
} from "../commands/DeleteIdentitiesCommand";
import {
  DeleteIdentityPoolCommandInput,
  DeleteIdentityPoolCommandOutput,
} from "../commands/DeleteIdentityPoolCommand";
import {
  DescribeIdentityCommandInput,
  DescribeIdentityCommandOutput,
} from "../commands/DescribeIdentityCommand";
import {
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
} from "../commands/DescribeIdentityPoolCommand";
import {
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
} from "../commands/GetCredentialsForIdentityCommand";
import {
  GetIdCommandInput,
  GetIdCommandOutput,
} from "../commands/GetIdCommand";
import {
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
} from "../commands/GetIdentityPoolRolesCommand";
import {
  GetOpenIdTokenCommandInput,
  GetOpenIdTokenCommandOutput,
} from "../commands/GetOpenIdTokenCommand";
import {
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
} from "../commands/GetOpenIdTokenForDeveloperIdentityCommand";
import {
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
} from "../commands/GetPrincipalTagAttributeMapCommand";
import {
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "../commands/ListIdentitiesCommand";
import {
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
} from "../commands/ListIdentityPoolsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
} from "../commands/LookupDeveloperIdentityCommand";
import {
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
} from "../commands/MergeDeveloperIdentitiesCommand";
import {
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
} from "../commands/SetIdentityPoolRolesCommand";
import {
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
} from "../commands/SetPrincipalTagAttributeMapCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "../commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
} from "../commands/UnlinkDeveloperIdentityCommand";
import {
  UnlinkIdentityCommandInput,
  UnlinkIdentityCommandOutput,
} from "../commands/UnlinkIdentityCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "../commands/UntagResourceCommand";
import {
  UpdateIdentityPoolCommandInput,
  UpdateIdentityPoolCommandOutput,
} from "../commands/UpdateIdentityPoolCommand";
export declare const serializeAws_json1_1CreateIdentityPoolCommand: (
  input: CreateIdentityPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteIdentitiesCommand: (
  input: DeleteIdentitiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteIdentityPoolCommand: (
  input: DeleteIdentityPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeIdentityCommand: (
  input: DescribeIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeIdentityPoolCommand: (
  input: DescribeIdentityPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCredentialsForIdentityCommand: (
  input: GetCredentialsForIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetIdCommand: (
  input: GetIdCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetIdentityPoolRolesCommand: (
  input: GetIdentityPoolRolesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetOpenIdTokenCommand: (
  input: GetOpenIdTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand: (
  input: GetOpenIdTokenForDeveloperIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetPrincipalTagAttributeMapCommand: (
  input: GetPrincipalTagAttributeMapCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListIdentitiesCommand: (
  input: ListIdentitiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListIdentityPoolsCommand: (
  input: ListIdentityPoolsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1LookupDeveloperIdentityCommand: (
  input: LookupDeveloperIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1MergeDeveloperIdentitiesCommand: (
  input: MergeDeveloperIdentitiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SetIdentityPoolRolesCommand: (
  input: SetIdentityPoolRolesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SetPrincipalTagAttributeMapCommand: (
  input: SetPrincipalTagAttributeMapCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UnlinkDeveloperIdentityCommand: (
  input: UnlinkDeveloperIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UnlinkIdentityCommand: (
  input: UnlinkIdentityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateIdentityPoolCommand: (
  input: UpdateIdentityPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateIdentityPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateIdentityPoolCommandOutput>;
export declare const deserializeAws_json1_1DeleteIdentitiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteIdentitiesCommandOutput>;
export declare const deserializeAws_json1_1DeleteIdentityPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteIdentityPoolCommandOutput>;
export declare const deserializeAws_json1_1DescribeIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeIdentityCommandOutput>;
export declare const deserializeAws_json1_1DescribeIdentityPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeIdentityPoolCommandOutput>;
export declare const deserializeAws_json1_1GetCredentialsForIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCredentialsForIdentityCommandOutput>;
export declare const deserializeAws_json1_1GetIdCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIdCommandOutput>;
export declare const deserializeAws_json1_1GetIdentityPoolRolesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIdentityPoolRolesCommandOutput>;
export declare const deserializeAws_json1_1GetOpenIdTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetOpenIdTokenCommandOutput>;
export declare const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput>;
export declare const deserializeAws_json1_1GetPrincipalTagAttributeMapCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetPrincipalTagAttributeMapCommandOutput>;
export declare const deserializeAws_json1_1ListIdentitiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListIdentitiesCommandOutput>;
export declare const deserializeAws_json1_1ListIdentityPoolsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListIdentityPoolsCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1LookupDeveloperIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<LookupDeveloperIdentityCommandOutput>;
export declare const deserializeAws_json1_1MergeDeveloperIdentitiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<MergeDeveloperIdentitiesCommandOutput>;
export declare const deserializeAws_json1_1SetIdentityPoolRolesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetIdentityPoolRolesCommandOutput>;
export declare const deserializeAws_json1_1SetPrincipalTagAttributeMapCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetPrincipalTagAttributeMapCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UnlinkDeveloperIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UnlinkDeveloperIdentityCommandOutput>;
export declare const deserializeAws_json1_1UnlinkIdentityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UnlinkIdentityCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateIdentityPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateIdentityPoolCommandOutput>;
