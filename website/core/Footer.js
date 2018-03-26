const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>About</h5>
            <p>Semua permasalahan React dan Redux yang telah kita solve bersama tim bisa kamu temukan disini. Untuk sementara(karena library tidak terlalu banyak), kami menjabarkan semuanya berdasarkan kategori saja.</p>
          </div>
          <div>
            <h5>Link Related</h5>
            <a href={this.pageUrl('reduxProject-01.html', this.props.language)}>
              Redux & React
            </a>
            <a
              href="https://telecreativenow.com/"
              target="_blank">
              Telecreative Website
            </a>
            <a href="https://instagram.com/telecreativenow" target="_blank">
              Instagram
            </a>
          </div>
          <div>
            <h5>Github</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/telecreative">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/superhero.svg'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} PT Tele Digital Kreatif.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
