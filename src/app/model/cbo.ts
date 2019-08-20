export class Cbo {
  public static cbos = [
      {codigo: '515105', descricao: 'AGENTE COMUNITARIO DE SAUDE' },
      {codigo: '515110', descricao: 'ATENDENTE DE ENFERMAGEM' },
      {codigo: '515115', descricao: 'PARTEIRA LEIGA' },
      {codigo: '515120', descricao: 'VISITADOR SANITARIO' },
      {codigo: '515125', descricao: 'AGENTE INDIGENA DE SAUDE' },
      {codigo: '515130', descricao: 'AGENTE INDIGENA DE SANEAMENTO' },
      {codigo: '515135', descricao: 'SOCORRISTA (EXCETO MEDICOS E ENFERMEIROS)' },
      {codigo: '5152A1', descricao: 'MICROSCOPISTA' },
      {codigo: '515205', descricao: 'AUXILIAR DE BANCO DE SANGUE' },
      {codigo: '515210', descricao: 'AUXILIAR DE FARMACIA DE MANIPULACAO' },
      {codigo: '515215', descricao: 'AUXILIAR DE LABORATORIO DE ANALISES CLINICAS' },
      {codigo: '515220', descricao: 'AUXILIAR DE LABORATORIO DE IMUNOBIOLOGICOS' },
      {codigo: '515225', descricao: 'AUXILIAR DE PRODUCAO FARMACEUTICA' },
      {codigo: '515305', descricao: 'EDUCADOR SOCIAL' },
      {codigo: '515310', descricao: 'AGENTE DE ACAO SOCIAL' },
      {codigo: '515315', descricao: 'MONITOR DE DEPENDENTE QUIMICO' },
      {codigo: '515325', descricao: 'SOCIOEDUCADOR' },
      {codigo: '516220', descricao: 'CUIDADOR EM SAUDE' },
      {codigo: '1312C1', descricao: 'SANITARISTA' },
      {codigo: '131205', descricao: 'DIRETOR DE SERVICOS DE SAUDE' },
      {codigo: '131210', descricao: 'GERENTE DE SERVICOS DE SAUDE' },
      {codigo: '142340', descricao: 'OUVIDOR' },
      {codigo: '201115', descricao: 'GENETICISTA' },
      {codigo: '203005', descricao: 'PESQUISADOR EM BIOLOGIA AMBIENTAL' },
      {codigo: '203015', descricao: 'PESQUISADOR EM BIOLOGIA DE MICROORGANISMOS E PARASITAS' },
      {codigo: '203020', descricao: 'PESQUISADOR EM BIOLOGIA HUMANA' },
      {codigo: '203320', descricao: 'PESQUISADOR EM SAUDE COLETIVA' },
      {codigo: '213150', descricao: 'FISICO (MEDICINA)' },
      {codigo: '213155', descricao: 'FISICO (NUCLEAR E REATORES)' },
      {codigo: '213165', descricao: 'FISICO (PARTICULAS E CAMPOS)' },
      {codigo: '213170', descricao: 'FISICO (PLASMA)' },
      {codigo: '213205', descricao: 'QUIMICO' },
      {codigo: '213210', descricao: 'QUIMICO INDUSTRIAL' },
      {codigo: '214915', descricao: 'ENGENHEIRO DE SEGURANCA DO TRABALHO' },
      {codigo: '221105', descricao: 'BIOLOGO' },
      {codigo: '221205', descricao: 'BIOMEDICO' },
      {codigo: '222205', descricao: 'ENGENHEIRO DE ALIMENTOS' },
      {codigo: '2231A1', descricao: 'MEDICO BRONCOESOFALOGISTA' },
      {codigo: '2231F8', descricao: 'MEDICO EM MEDICINA PREVENTIVA E SOCIAL' },
      {codigo: '2231F9', descricao: 'MEDICO RESIDENTE' },
      {codigo: '2231G1', descricao: 'MEDICO CARDIOLOGISTA INTERVENCIONISTA' },
      {codigo: '223119', descricao: 'MEDICO EM ELETROENCEFALOGRAFIA' },
      {codigo: '223150', descricao: 'MEDICO PERITO' },
      {codigo: '223204', descricao: 'CIRURGIAO DENTISTA  AUDITOR' },
      {codigo: '223208', descricao: 'CIRURGIAO DENTISTA  CLINICO GERAL' },
      {codigo: '223212', descricao: 'CIRURGIAO DENTISTA  ENDODONTISTA' },
      {codigo: '223216', descricao: 'CIRURGIAO DENTISTA  EPIDEMIOLOGISTA' },
      {codigo: '223220', descricao: 'CIRURGIAO DENTISTA  ESTOMATOLOGISTA' },
      {codigo: '223224', descricao: 'CIRURGIAO DENTISTA  IMPLANTODONTISTA' },
      {codigo: '223228', descricao: 'CIRURGIAO DENTISTA  ODONTOGERIATRA' },
      {codigo: '223232', descricao: 'CIRURGIAO DENTISTA  ODONTOLOGISTA LEGAL' },
      {codigo: '223236', descricao: 'CIRURGIAO DENTISTA  ODONTOPEDIATRA' },
      {codigo: '223240', descricao: 'CIRURGIAO DENTISTA  ORTOPEDISTA E ORTODONTISTA' },
      {codigo: '223244', descricao: 'CIRURGIAO DENTISTA  PATOLOGISTA BUCAL' },
      {codigo: '223248', descricao: 'CIRURGIAO DENTISTA  PERIODONTISTA' },
      {codigo: '223252', descricao: 'CIRURGIAO DENTISTA  PROTESIOLOGO BUCOMAXILOFACIAL' },
      {codigo: '223256', descricao: 'CIRURGIAO DENTISTA  PROTESISTA' },
      {codigo: '223260', descricao: 'CIRURGIAO DENTISTA  RADIOLOGISTA' },
      {codigo: '223264', descricao: 'CIRURGIAO DENTISTA  REABILITADOR ORAL' },
      {codigo: '223268', descricao: 'CIRURGIAO DENTISTA  TRAUMATOLOGISTA BUCOMAXILOFACIAL' },
      {codigo: '223272', descricao: 'CIRURGIAO DENTISTA DE SAUDE COLETIVA' },
      {codigo: '223276', descricao: 'CIRURGIAO DENTISTA  ODONTOLOGIA DO TRABALHO' },
      {codigo: '223280', descricao: 'CIRURGIAO DENTISTA  DENTISTICA' },
      {codigo: '223284', descricao: 'CIRURGIAO DENTISTA  DISFUNCAO TEMPOROMANDIBULAR E DOR OROFACIAL' },
      {codigo: '223288', descricao: 'CIRURGIAO DENTISTA  ODONTOLOGIA PARA PACIENTES COM NECESSIDADES ESPECIAIS' },
      {codigo: '223293', descricao: 'CIRURGIAODENTISTA DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '223305', descricao: 'MEDICO VETERINARIO' },
      {codigo: '223310', descricao: 'ZOOTECNISTA' },
      {codigo: '223405', descricao: 'FARMACEUTICO' },
      {codigo: '223415', descricao: 'FARMACEUTICO ANALISTA CLINICO' },
      {codigo: '223420', descricao: 'FARMACEUTICO DE ALIMENTOS' },
      {codigo: '223425', descricao: 'FARMACEUTICO PRATICAS INTEGRATIVAS E COMPLEMENTARES' },
      {codigo: '223430', descricao: 'FARMACEUTICO EM SAUDE PUBLICA' },
      {codigo: '223435', descricao: 'FARMACEUTICO INDUSTRIAL' },
      {codigo: '223440', descricao: 'FARMACEUTICO TOXICOLOGISTA' },
      {codigo: '223445', descricao: 'FARMACEUTICO HOSPITALAR E CLINICO' },
      {codigo: '2235C3', descricao: 'ENFERMEIRO ESTOMATERAPEUTA' },
      {codigo: '223505', descricao: 'ENFERMEIRO' },
      {codigo: '223510', descricao: 'ENFERMEIRO AUDITOR' },
      {codigo: '223515', descricao: 'ENFERMEIRO DE BORDO' },
      {codigo: '223520', descricao: 'ENFERMEIRO DE CENTRO CIRURGICO' },
      {codigo: '223525', descricao: 'ENFERMEIRO DE TERAPIA INTENSIVA' },
      {codigo: '223530', descricao: 'ENFERMEIRO DO TRABALHO' },
      {codigo: '223535', descricao: 'ENFERMEIRO NEFROLOGISTA' },
      {codigo: '223540', descricao: 'ENFERMEIRO NEONATOLOGISTA' },
      {codigo: '223545', descricao: 'ENFERMEIRO OBSTETRICO' },
      {codigo: '223550', descricao: 'ENFERMEIRO PSIQUIATRICO' },
      {codigo: '223555', descricao: 'ENFERMEIRO PUERICULTOR E PEDIATRICO' },
      {codigo: '223560', descricao: 'ENFERMEIRO SANITARISTA' },
      {codigo: '223565', descricao: 'ENFERMEIRO DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '223570', descricao: 'PERFUSIONISTA' },
      {codigo: '2236I1', descricao: 'TECNICO EM ORIENTACAO E MOBILIDADE DE CEGOS E DEFICIENTES VISUAIS' },
      {codigo: '223605', descricao: 'FISIOTERAPEUTA GERAL' },
      {codigo: '223625', descricao: 'FISIOTERAPEUTA RESPIRATORIA' },
      {codigo: '223630', descricao: 'FISIOTERAPEUTA NEUROFUNCIONAL' },
      {codigo: '223635', descricao: 'FISIOTERAPEUTA TRAUMATOORTOPEDICA FUNCIONAL' },
      {codigo: '223640', descricao: 'FISIOTERAPEUTA OSTEOPATA' },
      {codigo: '223645', descricao: 'FISIOTERAPEUTA QUIROPRAXISTA' },
      {codigo: '223650', descricao: 'FISIOTERAPEUTA ACUPUNTURISTA' },
      {codigo: '223655', descricao: 'FISIOTERAPEUTA ESPORTIVO' },
      {codigo: '223660', descricao: 'FISIOTERAPEUTA DO TRABALHO' },
      {codigo: '223710', descricao: 'NUTRICIONISTA' },
      {codigo: '223810', descricao: 'FONOAUDIOLOGO' },
      {codigo: '223815', descricao: 'FONOAUDIOLOGO EDUCACIONAL' },
      {codigo: '223820', descricao: 'FONOAUDIOLOGO EM AUDIOLOGIA' },
      {codigo: '223825', descricao: 'FONOAUDIOLOGO EM DISFAGIA' },
      {codigo: '223830', descricao: 'FONOAUDIOLOGO EM LINGUAGEM' },
      {codigo: '223835', descricao: 'FONOAUDIOLOGO EM MOTRICIDADE OROFACIAL' },
      {codigo: '223840', descricao: 'FONOAUDIOLOGO EM SAUDE COLETIVA' },
      {codigo: '223845', descricao: 'FONOAUDIOLOGO EM VOZ' },
      {codigo: '223905', descricao: 'TERAPEUTA OCUPACIONAL' },
      {codigo: '223910', descricao: 'ORTOPTISTA' },
      {codigo: '2241E1', descricao: 'PROFISSIONAL DE EDUCACAO FISICA NA SAUDE' },
      {codigo: '224105', descricao: 'AVALIADOR FISICO' },
      {codigo: '224110', descricao: 'LUDOMOTRICISTA' },
      {codigo: '224115', descricao: 'PREPARADOR DE ATLETA' },
      {codigo: '224120', descricao: 'PREPARADOR FISICO' },
      {codigo: '224125', descricao: 'TECNICO DE DESPORTO INDIVIDUAL E COLETIVO (EXCETO FUTEBOL)' },
      {codigo: '224130', descricao: 'TECNICO DE LABORATORIO E FISCALIZACAO DESPORTIVA' },
      {codigo: '225103', descricao: 'MEDICO INFECTOLOGISTA' },
      {codigo: '225105', descricao: 'MEDICO ACUPUNTURISTA' },
      {codigo: '225106', descricao: 'MEDICO LEGISTA' },
      {codigo: '225109', descricao: 'MEDICO NEFROLOGISTA' },
      {codigo: '225110', descricao: 'MEDICO ALERGISTA E IMUNOLOGISTA' },
      {codigo: '225112', descricao: 'MEDICO NEUROLOGISTA' },
      {codigo: '225115', descricao: 'MEDICO ANGIOLOGISTA' },
      {codigo: '225118', descricao: 'MEDICO NUTROLOGISTA' },
      {codigo: '225120', descricao: 'MEDICO CARDIOLOGISTA' },
      {codigo: '225121', descricao: 'MEDICO ONCOLOGISTA CLINICO' },
      {codigo: '225122', descricao: 'MEDICO CANCEROLOGISTA PEDIATRICO' },
      {codigo: '225124', descricao: 'MEDICO PEDIATRA' },
      {codigo: '225125', descricao: 'MEDICO CLINICO' },
      {codigo: '225127', descricao: 'MEDICO PNEUMOLOGISTA' },
      {codigo: '225130', descricao: 'MEDICO DE FAMILIA E COMUNIDADE' },
      {codigo: '225133', descricao: 'MEDICO PSIQUIATRA' },
      {codigo: '225135', descricao: 'MEDICO DERMATOLOGISTA' },
      {codigo: '225136', descricao: 'MEDICO REUMATOLOGISTA' },
      {codigo: '225139', descricao: 'MEDICO SANITARISTA' },
      {codigo: '225140', descricao: 'MEDICO DO TRABALHO' },
      {codigo: '225142', descricao: 'MEDICO DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '225145', descricao: 'MEDICO EM MEDICINA DE TRAFEGO' },
      {codigo: '225148', descricao: 'MEDICO ANATOMOPATOLOGISTA' },
      {codigo: '225150', descricao: 'MEDICO EM MEDICINA INTENSIVA' },
      {codigo: '225151', descricao: 'MEDICO ANESTESIOLOGISTA' },
      {codigo: '225155', descricao: 'MEDICO ENDOCRINOLOGISTA E METABOLOGISTA' },
      {codigo: '225160', descricao: 'MEDICO FISIATRA' },
      {codigo: '225165', descricao: 'MEDICO GASTROENTEROLOGISTA' },
      {codigo: '225170', descricao: 'MEDICO GENERALISTA' },
      {codigo: '225175', descricao: 'MEDICO GENETICISTA' },
      {codigo: '225180', descricao: 'MEDICO GERIATRA' },
      {codigo: '225185', descricao: 'MEDICO HEMATOLOGISTA' },
      {codigo: '225195', descricao: 'MEDICO HOMEOPATA' },
      {codigo: '225203', descricao: 'MEDICO EM CIRURGIA VASCULAR' },
      {codigo: '225210', descricao: 'MEDICO CIRURGIAO CARDIOVASCULAR' },
      {codigo: '225215', descricao: 'MEDICO CIRURGIAO DE CABECA E PESCOCO' },
      {codigo: '225220', descricao: 'MEDICO CIRURGIAO DO APARELHO DIGESTIVO' },
      {codigo: '225225', descricao: 'MEDICO CIRURGIAO GERAL' },
      {codigo: '225230', descricao: 'MEDICO CIRURGIAO PEDIATRICO' },
      {codigo: '225235', descricao: 'MEDICO CIRURGIAO PLASTICO' },
      {codigo: '225240', descricao: 'MEDICO CIRURGIAO TORACICO' },
      {codigo: '225250', descricao: 'MEDICO GINECOLOGISTA E OBSTETRA' },
      {codigo: '225255', descricao: 'MEDICO MASTOLOGISTA' },
      {codigo: '225260', descricao: 'MEDICO NEUROCIRURGIAO' },
      {codigo: '225265', descricao: 'MEDICO OFTALMOLOGISTA' },
      {codigo: '225270', descricao: 'MEDICO ORTOPEDISTA E TRAUMATOLOGISTA' },
      {codigo: '225275', descricao: 'MEDICO OTORRINOLARINGOLOGISTA' },
      {codigo: '225280', descricao: 'MEDICO COLOPROCTOLOGISTA' },
      {codigo: '225285', descricao: 'MEDICO UROLOGISTA' },
      {codigo: '225290', descricao: 'MEDICO CANCEROLOGISTA CIRURGICO' },
      {codigo: '225295', descricao: 'MEDICO CIRURGIAO DA MAO' },
      {codigo: '225305', descricao: 'MEDICO CITOPATOLOGISTA' },
      {codigo: '225310', descricao: 'MEDICO EM ENDOSCOPIA' },
      {codigo: '225315', descricao: 'MEDICO EM MEDICINA NUCLEAR' },
      {codigo: '225320', descricao: 'MEDICO EM RADIOLOGIA E DIAGNOSTICO POR IMAGEM' },
      {codigo: '225325', descricao: 'MEDICO PATOLOGISTA' },
      {codigo: '225330', descricao: 'MEDICO RADIOTERAPEUTA' },
      {codigo: '225335', descricao: 'MEDICO PATOLOGISTA CLINICO  MEDICINA LABORATORIAL' },
      {codigo: '225340', descricao: 'MEDICO HEMOTERAPEUTA' },
      {codigo: '225345', descricao: 'MEDICO HIPERBARISTA' },
      {codigo: '225350', descricao: 'MEDICO NEUROFISIOLOGISTA CLINICO' },
      {codigo: '226105', descricao: 'QUIROPRAXISTA' },
      {codigo: '226110', descricao: 'OSTEOPATA' },
      {codigo: '226305', descricao: 'MUSICOTERAPEUTA' },
      {codigo: '226310', descricao: 'ARTETERAPEUTA' },
      {codigo: '226315', descricao: 'EQUOTERAPEUTA' },
      {codigo: '232120', descricao: 'PROFESSOR DE EDUCACAO FISICA NO ENSINO MEDIO' },
      {codigo: '233125', descricao: 'PROFESSOR DE TECNICAS DE ENFERMAGEM' },
      {codigo: '234410', descricao: 'PROFESSOR DE EDUCACAO FISICA NO ENSINO SUPERIOR' },
      {codigo: '234415', descricao: 'PROFESSOR DE ENFERMAGEM DO ENSINO SUPERIOR' },
      {codigo: '239205', descricao: 'PROFESSOR DE ALUNOS COM DEFICIENCIA AUDITIVA E SURDOS' },
      {codigo: '239210', descricao: 'PROFESSOR DE ALUNOS COM DEFICIENCIA FISICA' },
      {codigo: '239215', descricao: 'PROFESSOR DE ALUNOS COM DEFICIENCIA MENTAL' },
      {codigo: '239220', descricao: 'PROFESSOR DE ALUNOS COM DEFICIENCIA MULTIPLA' },
      {codigo: '239225', descricao: 'PROFESSOR DE ALUNOS COM DEFICIENCIA VISUAL' },
      {codigo: '239415', descricao: 'PEDAGOGO' },
      {codigo: '239425', descricao: 'PSICOPEDAGOGO' },
      {codigo: '251505', descricao: 'PSICOLOGO EDUCACIONAL' },
      {codigo: '251510', descricao: 'PSICOLOGO CLINICO' },
      {codigo: '251515', descricao: 'PSICOLOGO DO ESPORTE' },
      {codigo: '251520', descricao: 'PSICOLOGO HOSPITALAR' },
      {codigo: '251525', descricao: 'PSICOLOGO JURIDICO' },
      {codigo: '251530', descricao: 'PSICOLOGO SOCIAL' },
      {codigo: '251535', descricao: 'PSICOLOGO DO TRANSITO' },
      {codigo: '251540', descricao: 'PSICOLOGO DO TRABALHO' },
      {codigo: '251545', descricao: 'NEUROPSICOLOGO' },
      {codigo: '251550', descricao: 'PSICANALISTA' },
      {codigo: '251555', descricao: 'PSICOLOGO ACUPUNTURISTA' },
      {codigo: '251605', descricao: 'ASSISTENTE SOCIAL' },
      {codigo: '312210', descricao: 'TECNICO DE SANEAMENTO' },
      {codigo: '3135D1', descricao: 'TECNICO EM REABILITACAO' },
      {codigo: '3135D2', descricao: 'TECNICO EM EQUIPAMENTO MEDICO HOSPITALAR' },
      {codigo: '313505', descricao: 'TECNICO EM FOTONICA' },
      {codigo: '322105', descricao: 'TECNICO EM ACUPUNTURA' },
      {codigo: '322115', descricao: 'TECNICO EM QUIROPRAXIA' },
      {codigo: '322120', descricao: 'MASSOTERAPEUTA' },
      {codigo: '322135', descricao: 'DOULA' },
      {codigo: '322205', descricao: 'TECNICO DE ENFERMAGEM' },
      {codigo: '322210', descricao: 'TECNICO DE ENFERMAGEM DE TERAPIA INTENSIVA' },
      {codigo: '322215', descricao: 'TECNICO DE ENFERMAGEM DO TRABALHO' },
      {codigo: '322220', descricao: 'TECNICO DE ENFERMAGEM PSIQUIATRICA' },
      {codigo: '322225', descricao: 'INSTRUMENTADOR CIRURGICO' },
      {codigo: '322230', descricao: 'AUXILIAR DE ENFERMAGEM' },
      {codigo: '322235', descricao: 'AUXILIAR DE ENFERMAGEM DO TRABALHO' },
      {codigo: '322240', descricao: 'AUXILIAR DE SAUDE (NAVEGACAO MARITIMA)' },
      {codigo: '322245', descricao: 'TECNICO DE ENFERMAGEM DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '322250', descricao: 'AUXILIAR DE ENFERMAGEM DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '322305', descricao: 'TECNICO EM OPTICA E OPTOMETRIA' },
      {codigo: '322405', descricao: 'TECNICO EM SAUDE BUCAL' },
      {codigo: '322410', descricao: 'PROTETICO DENTARIO' },
      {codigo: '322415', descricao: 'AUXILIAR EM SAUDE BUCAL' },
      {codigo: '322420', descricao: 'AUXILIAR DE PROTESE DENTARIA' },
      {codigo: '322425', descricao: 'TECNICO EM SAUDE BUCAL DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '322430', descricao: 'AUXILIAR EM SAUDE BUCAL DA ESTRATEGIA DE SAUDE DA FAMILIA' },
      {codigo: '322505', descricao: 'TECNICO DE ORTOPEDIA' },
      {codigo: '322605', descricao: 'TECNICO DE IMOBILIZACAO ORTOPEDICA' },
      {codigo: '324105', descricao: 'TECNICO EM METODOS ELETROGRAFICOS EM ENCEFALOGRAFIA' },
      {codigo: '324110', descricao: 'TECNICO EM METODOS GRAFICOS EM CARDIOLOGIA' },
      {codigo: '324115', descricao: 'TECNICO EM RADIOLOGIA E IMAGENOLOGIA' },
      {codigo: '324120', descricao: 'TECNOLOGO EM RADIOLOGIA' },
      {codigo: '324125', descricao: 'TECNOLOGO OFTALMICO' },
      {codigo: '324205', descricao: 'TECNICO EM PATOLOGIA CLINICA' },
      {codigo: '324210', descricao: 'AUXILIAR TECNICO EM PATOLOGIA CLINICA' },
      {codigo: '325105', descricao: 'AUXILIAR TECNICO EM LABORATORIO DE FARMACIA' },
      {codigo: '325110', descricao: 'TECNICO EM LABORATORIO DE FARMACIA' },
      {codigo: '325115', descricao: 'TECNICO EM FARMACIA' },
      {codigo: '325205', descricao: 'TECNICO DE ALIMENTOS' },
      {codigo: '325210', descricao: 'TECNICO EM NUTRICAO E DIETETICA' },
      {codigo: '422220', descricao: 'OPERADOR DE RADIOCHAMADA' },
      {codigo: '351605', descricao: 'TECNICO EM SEGURANCA NO TRABALHO' },
      {codigo: '352210', descricao: 'AGENTE DE SAUDE PUBLICA' },
      {codigo: '422205', descricao: 'TELEFONISTA' },
      {codigo: '422210', descricao: 'TELEOPERADOR' },
      {codigo: '422215', descricao: 'MONITOR DE TELEATENDIMENTO' },
      {codigo: '5151F1', descricao: 'AGENTE DE COMBATE A ENDEMIAS' },
      {codigo: '131220', descricao: 'GERONTOLOGO' },
      {codigo: '214940', descricao: 'HIGIENISTA OCUPACIONAL' },
      {codigo: '225154', descricao: 'MEDICO ANTROPOSOFICO' },
      {codigo: '226320', descricao: 'NATUROLOGO' },
      {codigo: '351610', descricao: 'TECNICO EM HIGIENE OCUPACIONAL' },
      {codigo: '782320', descricao: 'CONDUTOR DE AMBULANCIA' },
      {codigo: '862160', descricao: 'OPERADOR DE ABASTECIMENTO DE COMBUSTIVEL DE AERONAVE' },
      {codigo: '515140', descricao: 'AGENTE DE COMBATE AS ENDEMIAS' },
      {codigo: '324215', descricao: 'CITOTECNICO' },
      {codigo: '324220', descricao: 'TECNICO EM HEMOTERAPIA' },
      {codigo: '2231A2', descricao: 'MEDICO HANSENOLOGISTA' },
      {codigo: '223410', descricao: 'FARMACEUTICO BIOQUIMICO' },
      {codigo: '223915', descricao: 'MUSICOTERAPEUTA' },
      {codigo: '225190', descricao: 'MEDICO HEMOTERAPEUTA' },
      {codigo: '225245', descricao: 'MEDICO FONIATRA' },
      {codigo: '766420', descricao: 'AUXILIAR DE RADIOLOGIA (REVELACAO FOTOGRAFICA)' },
      {codigo: '791110', descricao: 'ARTESAO CERAMISTA' },
      {codigo: '791115', descricao: 'ARTESAO COM MATERIAL RECICLAVEL' },
      {codigo: '791130', descricao: 'ARTESAO ESCULTOR' },
      {codigo: '791140', descricao: 'ARTESAO TECELAO' },
      {codigo: '791155', descricao: 'ARTESAO TRICOTEIRO' },
      {codigo: '791160', descricao: 'ARTESAO RENDEIRO' }
      ];
}
