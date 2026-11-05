import swaggerJsdoc from "swagger-jsdoc";

const isProduction = process.env.NODE_ENV === "production";

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",

    info: {
      title: "ReverbDoc AI API",
      version: "1.0.0",
      description:
        "API documentation for ReverbDoc AI - an AI-powered document intelligence and RAG platform.",
      contact: {
        name: "ReverbDoc AI Development Team",
      },
    },

    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
    ],

    tags: [
      {
        name: "Health",
        description: "API health-check endpoints",
      },
      {
        name: "Authentication",
        description: "User registration and authentication",
      },
      {
        name: "Knowledge Bases",
        description: "Knowledge base management",
      },
      {
        name: "Documents",
        description: "Document upload and management",
      },
      {
        name: "Conversations",
        description: "Document-based conversations",
      },
      {
        name: "RAG",
        description: "Retrieval-augmented generation operations",
      },
    ],
  },

  apis: isProduction
    ? ["./dist/routes/**/*.js"]
    : ["./src/routes/**/*.ts"],
};

export const openApiSpec = swaggerJsdoc(swaggerOptions);