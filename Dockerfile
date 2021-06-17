FROM python:3

USER root
WORKDIR /usr/src/app
COPY . .

RUN mv .bashrc /root/
CMD ["/bin/source","/root/.bashrc"]

EXPOSE 8000

# RUN pip install -r requirements.txt
RUN pip install -r requirements-dev.txt
