export default async function handler(req, res) {
    // Apenas permitir método POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método não permitido' });
    }
    
    try {
      
      const lambdaUrl = process.env.LAMBDA_URL;
      
      if (!lambdaUrl) {
        return res.status(500).json({ 
          GeneratedAt: new Date().toISOString(),
          Password: 'Erro de configuração do servidor.',
          Strength: 0
        });
      }
      
      
      const response = await fetch(lambdaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
      
      const data = await response.json();
      
    
      return res.status(response.status).json(data);
    } catch (error) {
      console.error('Erro ao processar requisição:', error);
      
 
      return res.status(500).json({
        GeneratedAt: new Date().toISOString(),
        Password: 'Erro ao gerar senha. Por favor, tente novamente.',
        Strength: 0
      });
    }
  }