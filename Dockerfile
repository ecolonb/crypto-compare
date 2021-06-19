FROM python:3

USER root
WORKDIR /usr/src/app
COPY . .

RUN mv .bashrc /root/
CMD ["/bin/source","/root/.bashrc"]

# to react development
RUN apt update
RUN apt -y upgrade
RUN apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt -y install nodejs
RUN apt -y  install gcc g++ make

EXPOSE 8000
EXPOSE 3000
EXPOSE 5000

RUN pip install -r requirements.txt
RUN pip install -r requirements-dev.txt
