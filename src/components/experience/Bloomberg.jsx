const Bloomberg = () => {
  return (
    <>
      <div className="experience bloomberg">
        <p className="experience-role">Data Engineer Co-op</p>
        <p className="experience-company">Infi Data Technology</p>
        <div className="experience-description">
          <ul>
            <li>
              Revamped a manual process involving JIRA to be completely
              automated, attaining a 95% reduction in employee time spent and
              deprecating the previously inefficient workflow
            </li>
            <li>
              Manipulate and extract data while maintaining confidentiality and
              adhering to company policies.
            </li>
            <li>
              Analyze data to identify trends, patterns, and insights that can
              inform business decisions.
            </li>
            <li>
              Create data visualizations to communicate complex data insights to
              stakeholders.
            </li>
            <li>
              Ensure data quality by identifying and addressing data
              inconsistencies, errors, and inaccuracies.
            </li>
            <li>
              Developed, maintained, and performed quality assurance on web
              crawlers to obtain and analyze data for distribution that is
              displayed on the Terminal.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/python.png" alt="python logo" />
          <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
          <img
            src="/toolkit-logos/jupyter-notebook.png"
            alt="jupyter-notebook logo"
          />
          <img src="/toolkit-logos/jira.png" alt="jira logo" />
        </div>
      </div>
    </>
  );
};

export default Bloomberg;
