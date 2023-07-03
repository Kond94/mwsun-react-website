import { CardContent, Chip, Paper, Typography } from "@material-ui/core";

import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NextImage from "next/image";
import React from "react";
import { slugify } from "../../utils";
import useGlobalContext from "../../hooks/useGlobalContext";
import useIcons from "../../hooks/useIcons";
import { useRouter } from "next/router";

const CardListItem = ({ item, slug }) => {
  const router = useRouter();

  const { setForm, setShowBookingModal, formState, setFormState } =
    useGlobalContext();
  const path = router.pathname.substring(
    router.pathname.indexOf("/") + 1,
    router.pathname.lastIndexOf("/")
  );

  return (
    <GridItem
      style={{ marginTop: 40, marginBottom: 30 }}
      key={item.id}
      xs={12}
      sm={12}
      md={12}
      lg={6}
    >
      <GridContainer>
        <GridItem xs={12} sm={6} lg={6}>
          <div
            onClick={() => router.push("/" + path + "/" + slugify(item.name))}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <NextImage
              className='grow'
              src={item.displayPhoto.url}
              title={item.name}
              width={"100vh"}
              height={"80vh"}
              layout='responsive'
              style={{
                boxShadow: "20px 20px 20px #e2e2e2",
              }}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <Paper
              style={{
                position: "absolute",
                top: 8,
                left: 10,
                padding: 5,
                fontWeight: "bold",
              }}
            >
              MK {item.price.toLocaleString("en-US")}
            </Paper>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} lg={6}>
          <CardContent>
            <div>
              <div
                onClick={() =>
                  router.push("/" + path + "/" + slugify(item.name))
                }
                style={{ position: "relative", cursor: "pointer" }}
              >
                <Typography gutterBottom variant='h5' component='h2'>
                  The {item.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {item.description
                    .substr(0, 140)
                    .substr(
                      0,
                      Math.min(
                        item.description.substr(0, 140).length,
                        item.description.substr(0, 140).lastIndexOf(" ")
                      )
                    ) + "..."}
                </Typography>
              </div>
              <Chip
                onClick={() =>
                  router.push("/" + path + "/" + slugify(item.name))
                }
                color='default'
                label={"see more"}
                size='small'
              />
              <br />
              <div style={{ marginTop: 40 }}>
                <Button
                  onClick={() => {
                    setForm(path);
                    setShowBookingModal(true);
                    setFormState({ ...formState, room: item.id });
                  }}
                  color='mwsun'
                >
                  Book Room
                </Button>
              </div>
            </div>
          </CardContent>
        </GridItem>
      </GridContainer>
    </GridItem>
  );
};

export default CardListItem;
