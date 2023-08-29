# INIT A LOCAL DB to store pdf url patterns for particular domains:
from dotenv import load_dotenv
import os
from loguru import logger

load_dotenv()
NORD_USERNAME = os.getenv("NORD_USERNAME")
NORD_PASSWORD = os.getenv("NORD_PASSWORD")
OPENAPI_KEY = os.getenv("OPENAI_API_KEY")
CHROME_DRIVER_PATH = os.getenv("CHROME_DRIVER_PATH")


SCIENCE_DOMAINS = [
    "medrxiv.org",
    "biorxiv.org",
    "arxiv.org",
    "sci-hub.se",
    "nature.com",
    "science.org",
    "sciencedirect.com",
    "thelancet.com",
    "jamanetwork.com",
    "nejm.org",
    "bmj.com",
    "cell.com",
    "sciencedirect.com",
    "pubmed.ncbi.nlm.nih.gov",
    "nejm.org",
    "elsevier.com",
    "frontiersin.org",
    "springer.com",
    "link.springer.com",
    "ajph.aphapublications.org",
    "aphapublications.org",
    "oa.mg",
    "academic.oup.com",
    "plos.org",
    "acs.org",
    "rsc.org",
    "liebertpub.com",
    "wiley.com",
    "iopscience.iop.org",
    "osapublishing.org",
    "onlinelibrary.wiley.com",
    "sagepub.com",
    "tandfonline.com",
    "peerj.com",
    "mdpi.com",
    "hindawi.com",
    "journals.plos.org",
    "sciencedaily.com",
    "phys.org",
    "eurekalert.org",
    "aps.org",
    "royalsocietypublishing.org",
    "emboj.embopress.org",
    "benthamscience.com",
    "biomedcentral.com",
    "jove.com",
    "copernicus.org",
    "europepmc.org",
    "cochranelibrary.com",
    "esmed.org",
]

DOMAIN_HANDLERS = {
    "youtube.com": None,
    "vimeo.com": None,
    "twitter.com": None,
    "substack.com": None,
    # add more domain-handler mappings as needed
}
