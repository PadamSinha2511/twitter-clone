import { graphql } from "../../gql";

export const verifyUserGoogleToken=graphql(`#graphql

query verifyGoogleToken($token:String!){
    
    verifyGoogleToken(token: $token)
}


`)