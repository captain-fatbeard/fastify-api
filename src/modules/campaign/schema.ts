import { Static, Type } from '@sinclair/typebox';

const CampaignSchemaPart = {
    template_name: Type.Optional(Type.String()),
    theme: Type.Optional(Type.String()),
    is_published: Type.Optional(Type.Boolean()),
    is_template: Type.Optional(Type.Boolean()),
    from: Type.Optional(Type.String()),
    to: Type.Optional(Type.String()),
};

export const UdpateCampaignSchema = Type.Object({
    name: Type.Optional(Type.String()),
    slug: Type.Optional(Type.String()),
    ...CampaignSchemaPart,
});

export const StoreCampaignSchema = Type.Object({
    name: Type.String(),
    slug: Type.String(),
    client: Type.Number(),
    ...CampaignSchemaPart,
});

export const CampaignResponseSchema = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
    slug: Type.String(),
    client: Type.Object({
        id: Type.Integer(),
        name: Type.String(),
    }),
    ...CampaignSchemaPart,
});

export const CampaignDeletedResponseSchema = Type.Object({
    message: Type.Optional(Type.String()),
});

export type StoreCampaignInput = Static<typeof StoreCampaignSchema>;
export type UdpateCampaignInput = Static<typeof UdpateCampaignSchema>;
