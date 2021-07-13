import * as React from 'react';
import { configure } from 'react-apollo-form';
import { client } from '../../apollo';

const jsonSchema = require('../../forms/apollo-form-json-schema.json')

export const ApplicationForm = configure<ApolloFormMutationNames>({
	// tslint:disable-next-line:no-any
	client: client as any,
	jsonSchema
});
