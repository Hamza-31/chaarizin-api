/**
 * journal controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::journal.journal', ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params
		const entity = await strapi.db.query('api::journal.journal').findOne({
			where: {
				slug: id
			},
			populate: ["author"]
		});
		const sanitizedResults = await this.sanitizeOutput(entity, ctx);

		return this.transformResponse(sanitizedResults);
	}
}));
